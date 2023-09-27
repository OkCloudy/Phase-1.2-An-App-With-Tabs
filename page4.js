import React from "react";

const Page4 = () => {
  const styles = {
    container: {
      textAlign: "center"
    },
    image: {
      maxWith: "100%",
      maxHeight: "100%",
      display: "inline-block",
      margin: "0 auto"
    }
  };
  function notification() {
    alert("Warning! Do not click on the profile image");
  }
  return (
    <div style={styles}>
      <h1>Profile</h1>
      <center>
        <img
          class="smile-picture"
          src="https://hotemoji.com/images/emoji/1/1bcqozl6q531.png"
          alt="smile"
          height={200}
          width={200}
          // style={{ aligi: 'center',
          // justifyContent: 'center' }}
          style={{ alignSelf: "center" }}
          onClick={notification}
        />
      </center>

      <center>
        <h1> XXX </h1>
      </center>
    </div>
  );
};

export default Page4;
