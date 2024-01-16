import React from 'react';
import './Header.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        oppacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
        <motion.div
            whileInView={{x: [-100, 0], oppacity: [0, 1]}}
            transition={{duration: 0.5}}
            className="app__header-info"
        >
            <div className="app__header-badge">
                <div className="badge-cmp app__flex">
                    <span>👋</span>
                    <div style={{marginLeft: 30, marginRight: 30}}>
                        <p className="p-text">Hi, I am </p>
                        <h1 className="head-text">Grant</h1>
                    </div>
                </div>

                <div className="tag-cmp app__flex">
                    <p className="p-text">SAP Consultant/</p>
                    <p className="p-text">Fleelance Developer</p>
                </div>
            </div>
        </motion.div>

        <motion.div
            whileInView={{ oppacity: [0, 1]}}
            transition={{duration: 0.5, delayChildren: 0.5}}
            className="app__header-img"
        >
            <img src={images.ai2} alt="profile_bg"/>
            <motion.img
                whileInView={{ scale: [0, 1]}}
                transition={{duration: 1, ease: 'easeInOut'}}
                className="overlay_circle"
                src={images.circle}
                alt="profile_circle"
            />
        </motion.div>

        <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
          {[images.react, images.javascript, images.node].map((circle, index) => (
            <div className="app__flex circle-cmp" key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
            </div>
          ))}
        </motion.div>

        </div>
    )
}

export default AppWrap(Header, 'home');