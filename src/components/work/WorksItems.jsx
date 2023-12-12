import React, { useState } from 'react';
import { Drawer, Modal } from 'antd';
import './Work.css'

const WorksItems = ({ item }) => {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

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
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <span
                className='work__button'
                type="primary"
                onClick={showDrawer}
                style={{ cursor: "pointer" }}>
                Demo
            </span>
            <Drawer title="Demo" placement="right" onClose={onClose} open={open}>
                <h3 className="section__title">Description</h3>
                <p className="work__modal-info"><i className="uil uil-check-circle work__modal-icon"></i>{item.description}</p>
                <a href={item.link} className="work__link">{item.link}</a>
                <h3 className="work__zoom">Click to zoom</h3>
                <img src={item.images1} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images2} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images3} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images4} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images5} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images6} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images7} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images8} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images9} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images10} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images11} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images12} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images13} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images14} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images15} alt='' className="work__description-img" onClick={showModal}/>
                <img src={item.images16} alt='' className="work__description-img" onClick={showModal}/>

                <Modal title="Demo" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <img src={item.images1} alt='' className="work__description-img" />
                <img src={item.images2} alt='' className="work__description-img" />
                <img src={item.images3} alt='' className="work__description-img" />
                <img src={item.images4} alt='' className="work__description-img" />
                <img src={item.images5} alt='' className="work__description-img" />
                <img src={item.images6} alt='' className="work__description-img" />
                <img src={item.images7} alt='' className="work__description-img" />
                <img src={item.images8} alt='' className="work__description-img" />
                <img src={item.images9} alt='' className="work__description-img" />
                <img src={item.images10} alt='' className="work__description-img" />
                <img src={item.images11} alt='' className="work__description-img" />
                <img src={item.images12} alt='' className="work__description-img" />
                <img src={item.images13} alt='' className="work__description-img" />
                <img src={item.images14} alt='' className="work__description-img" />
                <img src={item.images15} alt='' className="work__description-img" />
                <img src={item.images16} alt='' className="work__description-img" />
                </Modal>
            </Drawer>
        </div>
    )
}

export default WorksItems

