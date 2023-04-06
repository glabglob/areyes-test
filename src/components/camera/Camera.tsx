import { useEffect, useRef } from 'react';

import { GiSquare } from 'react-icons/gi';

import './camera.scss';

const Camera: React.FC = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        if (!videoRef.current) return;

        const constraints = {
            audio: false,
            video: { facingMode: "user" },
        };

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                videoRef.current!.srcObject = stream;
                videoRef.current!.play();
            })
            .catch((err) => console.error(err));
    }, [videoRef]);


    return (
        <div className='camera__container'>
            {/* а тут уже сама камера */}
            <video ref={videoRef} className='camera__container-video'></video>
            <GiSquare className='camera__container-reactangle' />
            <span className='modal-overlay-content'>"Who is cuttest kitty?"</span>
        </div>
    );
};

export default Camera;