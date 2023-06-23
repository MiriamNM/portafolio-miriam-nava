import React, { useState } from "react";
import { Button } from 'antd';
import ModalEmail from '../../components/ModalEmail';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <footer class="h-20 bg-pink-555 flex flex-col items-center font-semibold" style={{'color':'white'}}>
            <h3>Contact with me:</h3>
            <Button type="text" block onClick={showModal} style={{'color':'white', 'font-family': 'Azeret Mono', 'font-weight': 'bold'}}>
                Miriam's Email
            </Button>
            <ModalEmail 
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </footer>   
    )
};

export default Footer;