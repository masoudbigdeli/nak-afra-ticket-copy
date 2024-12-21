import Icon from "../../../../components/icons/icon"
import { DatePeriodWithArrowWrapper } from "../../../../styles/pages/contracts"


interface DatePeriodWithArrowProps {
    paymentPeriodStartDate: string
    paymentPeriodEndDate: string
}
const DatePeriodWithArrow = ({ paymentPeriodStartDate, paymentPeriodEndDate }: DatePeriodWithArrowProps) => {
    return (
        <DatePeriodWithArrowWrapper>
            {paymentPeriodStartDate} {<Icon iconName='betweenDatesArrowLeft' size='1.25' />} {paymentPeriodEndDate}
        </DatePeriodWithArrowWrapper>
    )
}

export default DatePeriodWithArrow