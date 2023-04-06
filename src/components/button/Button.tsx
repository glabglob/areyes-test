import { IconType } from 'react-icons';

import './button.scss';

type ButtonProps = {
    size: number;
    icon: IconType;
    className: string
    // onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ size, icon: Icon, className }) => {
    return (
        <button
            className={`button ${className}`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <span className="button__icon-container">
                <Icon size={size * 0.8} className='button__icon-container-icon' />
            </span>
        </button>
    );
};

export default Button;