import styled from '@emotion/styled/macro'
import { createSvgIcon } from '@mui/material/utils';


export const Logo = createSvgIcon(
    <path d="M89.2902 61.722V79.8945C89.2902 84.4281 87.6805 88.3046 84.4613 91.5238C81.2421 94.7431 77.3656 96.3527 72.832 96.3527H25.2863C20.7527 96.3527 16.8762 94.7431 13.657 91.5238C10.4377 88.3046 8.82812 84.4281 8.82812 79.8945V32.3488C8.82812 27.8152 10.4377 23.9387 13.657 20.7195C16.8762 17.5002 20.7527 15.8906 25.2863 15.8906H72.832C75.2322 15.8906 77.4609 16.3668 79.5181 17.3193C80.0896 17.586 80.4325 18.0241 80.5468 18.6336C80.6611 19.2813 80.4896 19.8337 80.0325 20.2909L77.2323 23.0911C76.8513 23.472 76.4132 23.6625 75.9179 23.6625C75.8036 23.6625 75.6322 23.6244 75.4036 23.5482C74.5274 23.3196 73.6702 23.2054 72.832 23.2054H25.2863C22.7718 23.2054 20.6193 24.1006 18.8287 25.8912C17.0381 27.6818 16.1429 29.8343 16.1429 32.3488V79.8945C16.1429 82.409 17.0381 84.5615 18.8287 86.3521C20.6193 88.1427 22.7718 89.0379 25.2863 89.0379H72.832C75.3465 89.0379 77.499 88.1427 79.2896 86.3521C81.0801 84.5615 81.9754 82.409 81.9754 79.8945V65.3794C81.9754 64.8841 82.1469 64.465 82.4898 64.1221L86.1471 60.4648C86.5281 60.0838 86.9662 59.8933 87.4615 59.8933C87.6901 59.8933 87.9187 59.9505 88.1472 60.0647C88.9092 60.3695 89.2902 60.9219 89.2902 61.722ZM102.491 33.7774L55.9739 80.2946C55.0595 81.2089 53.9737 81.6661 52.7165 81.6661C51.4593 81.6661 50.3735 81.2089 49.4592 80.2946L24.8862 55.7216C23.9719 54.8073 23.5147 53.7215 23.5147 52.4643C23.5147 51.2071 23.9719 50.1213 24.8862 49.2069L31.1723 42.9208C32.0867 42.0065 33.1725 41.5493 34.4297 41.5493C35.6869 41.5493 36.7727 42.0065 37.687 42.9208L52.7165 57.9503L89.6902 20.9766C90.6045 20.0623 91.6903 19.6051 92.9475 19.6051C94.2048 19.6051 95.2905 20.0623 96.2049 20.9766L102.491 27.2627C103.405 28.1771 103.862 29.2629 103.862 30.5201C103.862 31.7773 103.405 32.8631 102.491 33.7774Z" fill="#8685E7"/>,
    'Logo',
);

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    background-color: ${props => props.theme.palette.background.paper};

    @media (min-width: 485px) {
        border-radius: 16px;
        max-width: 485px;
        max-height: 600px;
        /* margin: 5% auto; */
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 15px;
    padding-left: 10px;
    /* background-color: rgba(255,255,255,0.05); */

`;


export const Main = styled.div`
`;


const SvgStyle = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
    }
`;


export const SliderEl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    >* {
        padding: 10px;
    }

    ${SvgStyle} {
        height: 300px;
        padding-top:60px;
    }

    h2 {
        padding-top:40px;
    }
    span {
        padding:20px;
    }
`;
