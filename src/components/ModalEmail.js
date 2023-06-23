import React from "react";
import { Modal } from 'antd';

const AboutMe = ({isModalOpen, handleOk, handleCancel}) => {
    return (
        <div class="px-20">
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <form 
                className="contact-form"
                class="px-10 flex flex-col"
                // onSubmit={sendEmail}
            >
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            </Modal>
        </div>   
    )
};

export default AboutMe;