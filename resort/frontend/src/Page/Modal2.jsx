import { useState,useEffect } from "react";
// import { createContext } from "react";
import './Modal2.css';

// export const ModalContext = createContext();

export default function Modal2(){
    //모달창 상태
    const[isOpen2, setIsOpen2] = useState(false);
    //모달 컨텐츠
    const[modalContent2, setModalContent2] = useState(``);

    //모달 토글
    const toggle2 = () =>{
        setIsOpen2(!isOpen2);
    }
   
    const [AddressCopy2, setAddressCopy2] = useState(false);
    const [timer2, setTimer2] = useState(null); // 타이머 상태 추가

    const AddressCopyClick2 = () => {
        setAddressCopy2(true);
        
        // 기존 타이머가 있다면 정리
        if (timer2) {
            clearTimeout2(timer2);
        }

        // 새로운 타이머 설정
        const newTimer2 = setTimeout2(() => {
            setAddressCopy2(false);
        }, 2000);
        
        setTimer2(newTimer2); // 타이머 ID 저장
    };

    // 컴포넌트가 언마운트 될 때 타이머를 정리
    useEffect(() => {
        return () => {
            if (timer2) {
                clearTimeout2(timer2);
            }
        };
    }, [timer2]);

    return(
        <>

            {isOpen2 &&
                <div className='modalOverlay' onClick={toggle2}>
                    {/* 부모로 부터 이벤트 전파 막기 */}
                    <div className="modalWrap" onClick={e => e.stopPropagation()}>
                        <button className='closeBtn' onClick={toggle2}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        {modalContent2}            
                    </div>
                </div>
            }
        </>
        
    )
}