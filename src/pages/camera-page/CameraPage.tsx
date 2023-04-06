import Camera from '../../components/camera/Camera';
import ButtonsField from '../../components/buttons-field/ButtonsField';

import './cameraPage.scss';

const CameraPage = () => {
    return (
        <main>
            <div className="container">
                <Camera />
                <ButtonsField />
            </div>
        </main>
    )
}

export default CameraPage