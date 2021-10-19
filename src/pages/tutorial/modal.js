import React from "react";

import Modal from "../../components/modal/tutorialModal";

export default function TutorialModal({ screen, handleCloseTutorial }) {
  return (
    <Modal
      screen={screen}
      handleCloseTutorial={handleCloseTutorial}
    />
  );
}