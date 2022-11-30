import React from "react";

export const useCopy = () => {
  const [copied, setCopied] = React.useState(false);
  const [copiedText, setCopiedText] = React.useState("");

  const copyToClipBoard = (text, name) => {
    copyText(text)
      .catch(() => fallbackCopyTextToClipboard(text))
      .then(() => {
        setCopiedText(`${name ? name : ""} Copied!`);
        setCopied(true);
      })
      .catch(() => {
        setCopiedText(`Couldn't copy ${name ? name : "Text"}!!!`);
      })
      .finally(() => {
        setTimeout(() => setCopied(false), 1000);
        return copiedText;
      });
  };

  return {
    copyToClipBoard,
    copied,
    copiedText,
  };
};

const copyText = async (text) => {
  return navigator.clipboard.writeText(text);
};

const fallbackCopyTextToClipboard = (text) => {
  return new Promise((res, rej) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (err) {
      rej(err);
    }

    document.body.removeChild(textArea);
    res(text);
  });
};
