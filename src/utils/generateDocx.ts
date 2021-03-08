/* eslint-disable import/no-unresolved */
import api from 'services/api';

export async function generateDocx(formData: any) {
  try {
    const response = await api.post('/docx', {
      formData,
    });
    window.open(
      `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${response.data}`,
    );
  } catch (err) {
    console.log(err);
  }
}
