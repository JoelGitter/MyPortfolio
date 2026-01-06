import React from "react";
import "./AIAssistantHub.scss";

function AIAssistantHub() {
  return (
    <div className="container">
      <div className="about-header">AI Assistant Hub</div>
      <div className="sub-header">
        <em>2024 • Chrome Extension • Hobby</em>
      </div>
      <div className="text-container">
        AI Assistant Hub is a Chrome extension that provides quick access to
        multiple AI assistants from anywhere in your browser.
        <br />
        <br />
        I built this extension to solve the problem of constantly switching
        between tabs when working with different AI tools. With AI Assistant
        Hub, you can access your favorite AI assistants with a single click,
        right from any webpage you're on.
      </div>
      <div className="youtube-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/0ij7O_wjRBY?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
      <div className="text-container">
        <strong>Key Features:</strong> Quick access to multiple AI assistants
        from any webpage, clean intuitive interface, and seamless integration
        with your browsing workflow.
        <br />
        <br />
        Check it out at{" "}
        <a href="https://myassistanthub.com" target="_blank" rel="noreferrer">
          myassistanthub.com
        </a>
      </div>
    </div>
  );
}

export default AIAssistantHub;
