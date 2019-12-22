const sendEmailToServer = async (to, from, body, subject) => {
  try {
    const res = await Email.send({
      SecureToken: "2639ce74-beef-455f-9b97-3e0d9ef04aca",
      To: to,
      From: from,
      Subject: subject,
      Body: body
    });

    return res === 'OK';
  } catch (e) {
    console.error("Error occurs during sending email to server: ", e);
    return false;
  }
};

export default {
  sendEmailToServer
};
