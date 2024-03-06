export const checkPasswordRequirements = (password: string) => {
  const hasEightCharacters = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);

  return hasEightCharacters && hasNumber && hasUppercase && hasLowercase;
};

export const handleMailOptions = (
  email: string,
  token: string,
  emailSubject: string
) => {
  return {
    from: process.env.EMAIL,
    to: email,
    subject: emailSubject,
    html: `
    <div style="text-align:center; color: #000">
    <h1 style="font-size: 28px; font-weight: bolder">${emailSubject}</h1>
    <p style="font-size: 18px">Someone has created a Kitchenary account with this email address. If this was you, click the link below to verify your email address.</p>
    <a href=${token} target="_blank">
    <button style="background-color: #d54215; color: #fff; padding: 14px 32px; border: none; cursor: pointer; font-size: 14px; font-weight: bolder">ACTIVATE MY ACCOUNT</button>
    </a>
    <p>This link will expire within 30 minutes.</p>
    <p>If you didn't create this account, just ignore this message.</p>
    </div>
    `,
  };
};
