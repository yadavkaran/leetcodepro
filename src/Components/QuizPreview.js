import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

function QuizPreview() {
  return (
    <div>
      <h2>Quiz Preview</h2>
      <PDFViewer style={{ width: '100%', height: '600px' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default QuizPreview;
