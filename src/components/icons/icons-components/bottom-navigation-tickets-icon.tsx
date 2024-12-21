import { FC } from 'react'
import { IconProps } from '../icon'

const BottomNavigationTicketsIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3345 13.9316C17.3345 12.7672 16.3905 11.8233 15.2261 11.8233H4.44286C3.27843 11.8233 2.33447 12.7672 2.33447 13.9316V14.7941C2.33447 15.3305 2.50174 15.8534 2.81296 16.2902C4.25878 18.3194 6.62413 19.3245 9.83138 19.3245C13.038 19.3245 15.4046 18.3198 16.8539 16.2917C17.1664 15.8544 17.3345 15.3303 17.3345 14.7927V13.9316Z" fill="#1AB394" />
            <path d="M14.5192 5.26494C14.5192 2.67603 12.4205 0.577301 9.83159 0.577301C8.2842 0.577301 6.91193 1.32706 6.05823 2.48312C5.99189 2.46237 5.92131 2.45119 5.84813 2.45119H3.50637C3.11804 2.45119 2.80322 2.766 2.80322 3.15433V8.3096C2.80322 9.73351 3.95755 10.8878 5.38147 10.8878H5.61582V10.8838C5.61901 10.8838 5.62219 10.8838 5.62538 10.8838C6.14187 10.8838 6.56057 10.4651 6.56057 9.94858C6.56057 9.4321 6.14187 9.0134 5.62538 9.0134C5.32597 9.0134 5.05943 9.15412 4.88826 9.37294C4.48744 9.18675 4.20952 8.78061 4.20952 8.3096V8.07478H4.9106C5.2675 8.07478 5.59777 7.96083 5.86703 7.76732C6.69767 9.08053 8.16279 9.95261 9.83159 9.95261C12.4205 9.95261 14.5192 7.85385 14.5192 5.26494ZM5.14498 5.1656C5.1443 5.19863 5.14395 5.23175 5.14395 5.26494C5.14395 5.29814 5.1443 5.33125 5.14498 5.36428V6.43411C5.14498 6.56355 5.04004 6.66849 4.9106 6.66849H4.20952V3.85748H5.14498V5.1656Z" fill="#1AB394" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 13.9807C17.5 12.8162 16.556 11.8723 15.3916 11.8723H4.60839C3.44396 11.8723 2.5 12.8162 2.5 13.9807V14.5223C2.5 15.3593 2.79862 16.1689 3.34216 16.8053C4.81062 18.525 7.04758 19.3736 9.99691 19.3736C12.9458 19.3736 15.1839 18.5252 16.6551 16.8064C17.2004 16.1694 17.5 15.3585 17.5 14.5202V13.9807ZM4.60839 13.2786H15.3916C15.7794 13.2786 16.0938 13.593 16.0938 13.9807V14.5202C16.0938 15.0232 15.9139 15.5097 15.5868 15.8919C14.4088 17.2681 12.5641 17.9673 9.99691 17.9673C7.42968 17.9673 5.58661 17.2681 4.41159 15.8921C4.08546 15.5102 3.90629 15.0245 3.90629 14.5223V13.9807C3.90629 13.593 4.22064 13.2786 4.60839 13.2786Z" fill="#3B3B3B" />
            <path d="M14.6848 5.31402C14.6848 2.72511 12.586 0.626373 9.99712 0.626373C8.44973 0.626373 7.07746 1.37613 6.22376 2.53219C6.15742 2.51144 6.08684 2.50026 6.01366 2.50026H3.6719C3.28356 2.50026 2.96875 2.81507 2.96875 3.20341V8.35867C2.96875 9.78259 4.12308 10.9369 5.547 10.9369H5.78135V10.9328C5.78457 10.9328 5.7878 10.9328 5.79102 10.9328C6.30751 10.9328 6.72621 10.5141 6.72621 9.99766C6.72621 9.48117 6.30751 9.06247 5.79102 9.06247C5.49159 9.06247 5.22504 9.20319 5.05387 9.42211C4.65301 9.23591 4.37504 8.82978 4.37504 8.35867V8.12386H5.07613C5.43302 8.12386 5.7633 8.0099 6.03256 7.81639C6.8632 9.1296 8.32832 10.0017 9.99712 10.0017C12.586 10.0017 14.6848 7.90293 14.6848 5.31402ZM5.31051 5.21468C5.30982 5.2477 5.30948 5.28082 5.30948 5.31402C5.30948 5.34721 5.30982 5.38033 5.31051 5.41336V6.48318C5.31051 6.61262 5.20557 6.71756 5.07613 6.71756H4.37504V3.90655H5.31051V5.21468ZM6.7168 5.39711V5.23092C6.76089 3.45708 8.21263 2.03267 9.99712 2.03267C11.8094 2.03267 13.2785 3.50177 13.2785 5.31402C13.2785 7.12626 11.8094 8.59539 9.99712 8.59539C8.21263 8.59539 6.76089 7.17095 6.7168 5.39711Z" fill="#3B3B3B" />
        </svg>
    )
}

export default BottomNavigationTicketsIcon