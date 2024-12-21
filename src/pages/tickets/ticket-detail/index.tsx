import { FC, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TicketDetailPageWrapper, { TicketDetailInfoWrapper, TicketDetailWrapper, TicketsBottomBtnsWrapper } from '../../../styles/pages/tickets/ticket-detail'
import { ticketDetailDataS2CMiddleware } from '../../../services-data-middleware/server-to-client/ticket'
import TicketDetailHeader from './header'
import { TicketDateTimeAndBadgeWrapper, TicketDetailDateAndTimeWrapper, TicketExplanationWrapper, TicketImageItemWrapper, TicketImagesWrapper, TicketPhotosWrapper, TicketSupportResponseHeaderTexts, TicketSupportResponseHeaderWrapper, TicketSupportResponseTextWrapper, TicketSupportResponseWrapper, TicketUserMessageDateAndTimeWrapper, TicketUserMessageWrapper } from '../../../styles/pages/tickets'
import Badge from '../../../components/badge'
import BADGE_TYPE from '../../../enums/badge-type'
import Icon from '../../../components/icons/icon'
import TICKET_STATUS_TYPE from '../../../enums/ticket-status-type'
import PATH_OF_ROUTES, { pathGenerator } from '../../../enums/path-of-routes'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../../components/button'
import useCrudService from '../../../services/crud-service'
import apiUri from '../../../configs/api-uri'
import PageError from '../../../components/page-error'
import Loading from '../../../components/loading'
import { TicketEntityDetailModel } from '../../../models/pages/ticket'
import TICKET_MESSAGE_CREATOR_TYPE from '../../../enums/ticket-message-creator-type'
import toaster from '../../../components/toaster'
import Modal from '../../../components/modal'
import MODAL_TYPE from '../../../enums/modal-type'
import ActionConfirmPopover from '../../../components/action-confirm-popover'
import useStore from '../../../state-management/store'
import StoreModel from '../../../models/store-model'

const ticketDeletePopoverName = 'ticketDeletePopoverName'

const TicketDetail: FC = () => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { getEntity, deleteEntity } = useCrudService()
    const activePopoverName = useStore((store: StoreModel) => store.activePopoverName)
    const setActivePopoverName = useStore((store: StoreModel) => store.setActivePopoverName)

    const [loading, setLoading] = useState<boolean>(true)
    const [fetchError, setFetchError] = useState<boolean>(false)
    const [currentTicketData, setCurrentTicketData] = useState<TicketEntityDetailModel>()

    const showTicketDeleteModal: boolean = useMemo(() => (ticketDeletePopoverName === activePopoverName), [activePopoverName])

    const doFetchById = useCallback(async () => {
        setLoading(true)
        setFetchError(false)
        try {
            const response = await getEntity(
                apiUri.getTicketById.uri(id || ''),
                apiUri.getTicketById.permissions
            )
            setCurrentTicketData(ticketDetailDataS2CMiddleware(response.data as any))
        } catch {
            setFetchError(true)
        } finally {
            setLoading(false)
        }
    }, [id, getEntity, setLoading, setFetchError])

    useLayoutEffect(() => {
        if (typeof id === 'string' && id !== '') {
            doFetchById()
        } else {
            setTimeout(() => navigate(PATH_OF_ROUTES.TICKETS), 250)
        }
    }, [])

    const redirectTo = useCallback((id: string, routeName: keyof typeof pathGenerator) => {
        if (pathGenerator[routeName]) {
            navigate(pathGenerator[routeName]!(id))
        } else {
            console.error(`Route "${routeName}" does not exist in pathGenerator.`)
        }
    }, [pathGenerator])

    const doDeleteById = useCallback(async () => {
        setLoading(true)
        try {
            await deleteEntity(
                apiUri.deleteTicketById.uri(id || ''),
                apiUri.deleteTicketById.permissions
            )
            toaster.SUCCESS(t('ticketsPage.ticketDetail.ticketDeletedSuccessfully'))
            setActivePopoverName(null)
            navigate(PATH_OF_ROUTES.TICKETS)
        } catch {
            toaster.ERROR(t('ticketsPage.ticketDetail.deletingTicketWasUnsuccessfull'))
        } finally {
            setLoading(false)
        }
    }, [id, deleteEntity, setLoading, setFetchError])

    if (fetchError) {
        return (
            <PageError
                btnText={t('form.error.tryAgainBtn')}
                message={t('form.error.dataFetchingError')}
                onTryAgainBtnClick={doFetchById}
                onBackBtnClick={() => navigate(PATH_OF_ROUTES.TICKETS)}
            />
        )
    }

    return (
        <TicketDetailPageWrapper>
            {
                loading
                    ? <Loading />
                    : <>
                        <TicketDetailWrapper>
                            <TicketDetailHeader title={currentTicketData?.subject || ''} id={currentTicketData?.id || NaN} />
                            <TicketDetailInfoWrapper>
                                <TicketDateTimeAndBadgeWrapper>
                                    <TicketDetailDateAndTimeWrapper>
                                        <div>{currentTicketData?.time}</div>
                                        <div>{currentTicketData?.date}</div>
                                    </TicketDetailDateAndTimeWrapper>
                                    <Badge badgeType={BADGE_TYPE.GREEN}>
                                        {t('ticketsPage.ticket') + ' ' + t('ticketsPage.' + currentTicketData?.status + 'TicketTab')}
                                    </Badge>
                                </TicketDateTimeAndBadgeWrapper>
                                <TicketPhotosWrapper>
                                    <Icon iconName='attachment' size='1.5' />
                                    <div className='text'>{t('ticketsPage.ticketDetail.attachedImages')}</div>
                                    <ImageRenderer
                                        fetchLoading={loading}
                                        currentTicketData={currentTicketData}
                                    />
                                </TicketPhotosWrapper>
                                <TicketExplanationWrapper>
                                    <div className='top-text'>
                                        {t('ticketsPage.ticketDetail.explanation')}
                                    </div>
                                    <div className='bottom-text'>
                                        {currentTicketData?.text || ''}
                                    </div>
                                </TicketExplanationWrapper>
                            </TicketDetailInfoWrapper>
                            {currentTicketData?.messages ? currentTicketData?.messages.map((message) => (
                                message.type === TICKET_MESSAGE_CREATOR_TYPE.USER
                                    ?
                                    <TicketUserMessageWrapper key={message.id}>
                                        <TicketUserMessageDateAndTimeWrapper>
                                            <div>{message.time}</div>
                                            <div>{message.date}</div>
                                        </TicketUserMessageDateAndTimeWrapper>
                                        <TicketExplanationWrapper>
                                            <div className='top-text'>
                                                {t('ticketsPage.ticketDetail.explanation')}
                                            </div>
                                            <div className='bottom-text'>
                                                {message.text}
                                            </div>
                                        </TicketExplanationWrapper>
                                    </TicketUserMessageWrapper>
                                    : <TicketSupportResponseWrapper key={message.id}>
                                        <TicketSupportResponseHeaderWrapper>
                                            <Icon iconName='message' size='1.5' />
                                            <TicketSupportResponseHeaderTexts>
                                                <div className='top-text'>{t('ticketsPage.ticketDetail.supportResponse')}</div>
                                                <TicketDetailDateAndTimeWrapper>
                                                    <div>{message.time}</div>
                                                    <div>{message.date}</div>
                                                </TicketDetailDateAndTimeWrapper>
                                            </TicketSupportResponseHeaderTexts>
                                        </TicketSupportResponseHeaderWrapper>
                                        <TicketSupportResponseTextWrapper>
                                            {message.text}
                                        </TicketSupportResponseTextWrapper>
                                    </TicketSupportResponseWrapper>

                            )) : null}


                        </TicketDetailWrapper>
                        {currentTicketData?.status === TICKET_STATUS_TYPE.OPEN || currentTicketData?.status === TICKET_STATUS_TYPE.CLOSED ? (
                            <TicketsBottomBtnsWrapper>
                                {currentTicketData?.status === TICKET_STATUS_TYPE.OPEN ? (
                                    <>
                                        <Modal
                                            type={MODAL_TYPE.BOTTOM}
                                            show={showTicketDeleteModal}
                                            triggerElement={
                                                <Button
                                                    type='OUTLINE'
                                                    width='50%'
                                                    size='XL'
                                                    title={t('ticketsPage.ticketDetail.delete')}
                                                    onClick={() => setActivePopoverName(ticketDeletePopoverName)}
                                                    loading={false}
                                                    disabled={false}
                                                    hasIcon={false}
                                                />
                                            }
                                            dialogElement={
                                                <ActionConfirmPopover
                                                    loading={loading}
                                                    message={t('ticketsPage.ticketDetail.doYouWantToDeleteThisTicket')}
                                                    cancelBtnTitle={t('form.btns.cancel')}
                                                    actionBtnTitle={t('form.btns.confirm')}
                                                    onCancel={() => setActivePopoverName(null)}
                                                    onAction={doDeleteById}
                                                />
                                            }
                                            onClose={() => { }}
                                        />
                                        <Button
                                            type='FILLED'
                                            width='50%'
                                            size='XL'
                                            title={t('ticketsPage.ticketDetail.edit')}
                                            onClick={() => redirectTo(id ? id : '', 'UPDATE_TICKET')}
                                            loading={false}
                                            disabled={false}
                                            hasIcon={false}
                                        />
                                    </>
                                ) : (
                                    <Button
                                        type='FILLED'
                                        width='100%'
                                        size='XL'
                                        title={t('ticketsPage.ticketDetail.continueFollowing')}
                                        onClick={() => redirectTo(id ? id : '', 'FOLLOWING_UP_TICKET')}
                                        loading={false}
                                        disabled={false}
                                        hasIcon={false}
                                    />
                                )}
                            </TicketsBottomBtnsWrapper>
                        ) : null}
                    </>
            }
        </TicketDetailPageWrapper>
    )
}

export default TicketDetail

interface ImageRendererProps {
    fetchLoading: boolean
    currentTicketData: TicketEntityDetailModel | undefined
}

const ImageRenderer: FC<ImageRendererProps> = ({ fetchLoading, currentTicketData }) => {
    const imagesWrapperRef = useRef<HTMLDivElement | null>(null)
    const [imagesWrapperWidth, setImagesWrapperWidth] = useState<number>(1)

    useEffect(() => {
        if (!imagesWrapperRef.current) return
        const resizeObserver = new ResizeObserver(resizer)
        resizeObserver.observe(imagesWrapperRef.current)
        return () => {
            resizeObserver.disconnect()
        };
    }, [imagesWrapperRef])

    const resizer = useCallback((e: any) => {
        if (
            e &&
            Array.isArray(e) &&
            e.length && e[0]['contentRect'] &&
            e[0]['contentRect']['width'] &&
            typeof e[0]['contentRect']['width'] === 'number'
        ) {
            setImagesWrapperWidth(e[0]['contentRect']['width'])
        }
    }, [setImagesWrapperWidth])

    return (
        <TicketImagesWrapper ref={imagesWrapperRef}>
            {
                !fetchLoading
                    ?
                    <>
                        {
                            currentTicketData?.images.map((image: { id: number, url: string }) => (
                                <TicketImageItemWrapper
                                    key={image.id}
                                    countOfColumns={3}
                                    parentWidth={imagesWrapperWidth}
                                >
                                    <img src={image.url} alt={`ticket-image-${image.id}`} />
                                </TicketImageItemWrapper>
                            ))
                        }
                    </>
                    : null
            }
        </TicketImagesWrapper>
    )
}