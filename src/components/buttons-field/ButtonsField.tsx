// component
import Button from '../../components/button/Button';

// icons
import { MdControlCamera } from 'react-icons/md';
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineInfo } from 'react-icons/md';
import { MdOutlineFileUpload } from 'react-icons/md';

// scss
import './buttonsField.scss';

const ButtonsField: React.FC = () => {
    return (
        <div className="buttons__field">
            <Button
                size={40}
                icon={MdOutlineAddBox}
                className="add-control"
            />
            <Button
                size={60}
                icon={MdControlCamera}
                className="camera-control"
            />
            <Button
                size={30}
                icon={MdOutlineInfo}
                className="info-control"
            />
            <Button
                size={30}
                icon={MdOutlineFileUpload}
                className="upload-control"
            />
        </div>
    );
};

export default ButtonsField;

