import React, { useState } from 'react';
import './style.css';

const PasswordStrength = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const handlePasswordChange = (e) => {
        const passValue = e.target.value;
        setPassword(passValue);

        if (passValue.length > 0) {
            if (passValue.length < 4) {
                setStrength('weak');
            } else if (passValue.length >= 4 && passValue.length < 8) {
                setStrength('medium');
            } else if (passValue.length >= 8) {
                setStrength('strong');
            }
        } else {
            setStrength('');
        }
    };

    const getStrengthColor = () => {
        switch (strength) {
            case 'weak':
                return '#ff5925';
            case 'medium':
                return 'yellow';
            case 'strong':
                return '#26d730';
            default:
                return '';
        }
    };

    return (
        <div className="container">
            <div className="input-box">
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="password"
                    style={{ borderColor: getStrengthColor() }}
                />
                <button type="submit">
                    <img src="./imgs/arrow.png" alt="" />
                </button>
                {strength && (
                    <p id="message" style={{ color: getStrengthColor() }}>
                        password is <span id="strength">{strength}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default PasswordStrength;
