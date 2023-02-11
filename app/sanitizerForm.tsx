import DOMPurify from 'isomorphic-dompurify';

function sanitizeData({formData}) {
  const rawData = Object.fromEntries(formData);
  return Object
    .keys(rawData)
    .reduce((acc, key) => {
      acc[key] = DOMPurify
        .sanitize(rawData[key])
        .trim();
      return acc;
    }, {});
}

export { sanitizeData };
