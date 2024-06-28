import React from "react";

export default function ContactForm() {
  return (
    <>
      <iframe
        className="h-96"
        src="https://forms.clickup.com/9009227297/f/8cfvth1-5974/EDH71YR4R2C7G5Y0K5"
        onWheel=""
        width="100%"
        height="2000"
        style={{
          background: "transparent",
          border: "1px solid #ccc",
          height: "900px",
        }}
      ></iframe>
      <script
        async
        src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
      ></script>
    </>
  );
}
