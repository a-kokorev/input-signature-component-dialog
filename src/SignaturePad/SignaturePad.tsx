import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { penColorOptions } from '../../constants/signaturePad.constants';
import './SignaturePad.css';

const SignaturePad = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedPenColorOption, setSelectedPenColorOption] = useState(penColorOptions[2]);
  const canvasRef = useRef<SignatureCanvas>(null);

  const handlePenColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newPenValue = penColorOptions.find((item) => item.id === +value);

    if (newPenValue) {
      setSelectedPenColorOption(newPenValue);
    }
  }

  const clearSignature = () => {
    canvasRef.current?.clear();
  };

  return (
    <div className="signature-pad">
      {isModalOpen && (
        <div className="signature-pad-modal">
          <div className="signature-pad-modal-wrapper">
            <p className="signature-pad-modal-header">
              Add Signature
            </p>
            <div className="signature-pad-modal-content">
              <div className="signature-pag-pen-color-selector">
                {penColorOptions.map((option) => (
                  <label
                    key={`color_${option.id}`}
                    className={`signature-pag-pen-color-label ${
                      option.id === selectedPenColorOption.id &&
                      'signature-pag-pen-color-option-selected'
                    }`}
                    title={option.label}
                  >
                    <span
                      className="signature-pag-pen-color-span"
                      style={{ backgroundColor: option.color }}
                    />
                    <input
                      type="radio"
                      className="signature-pag-pen-color-input"
                      value={option.id}
                      checked={option.id === selectedPenColorOption.id}
                      onChange={handlePenColorChange}
                    />
                  </label>
                ))}
              </div>
              <div className="signature-pad-modal-canvas">
                <SignatureCanvas
                  ref={canvasRef}
                  penColor={selectedPenColorOption.color}
                  canvasProps={{ className: 'signature-canvas' }}
                />
              </div>
              <button className="clear-signature-button" onClick={clearSignature}>
                Clear Signature
              </button>
            </div>
            <div className="signature-pad-modal-footer">
              <button>Cancel</button>
              <button className="done-button">Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignaturePad;