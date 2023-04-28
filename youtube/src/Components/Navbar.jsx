import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMicrophone,
  faSearch,
  faVideo,
  faBell,
} from "@fortawesome/fontawesome-free-solid";
import { Button, Image, Input } from "@chakra-ui/react";

export const Navabr = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        position: "fixed",
        alignItems: "center",
        gap: "30px",
        height: "55px",
        backgroundColor: "black",
      }}
    >
      <FontAwesomeIcon
        style={{ color: "white", fontSize: "25px", marginLeft: "30px" }}
        icon={faBars}
      ></FontAwesomeIcon>
      <Image
        height={55}
        width={100}
        src="data:image/png;base64,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"
      />
      <div
        style={{
          marginLeft: "30px",
          border: "1px solid grey",
          borderRadius: "25px",
          background: "black",
        }}
      >
        <Input
          height={35}
          width={600}
          border={"none"}
          backgroundColor={"black"}
          color={"aliceblue"}
          type="text"
          placeholder="Search"
          borderLeftRadius={25}
        />
        <Button
          height={35}
          width={60}
          borderRightRadius={25}
          background={"black"}
          color={"white"}
          fontSize={25}
          colorScheme="black"
        >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
      </div>
      <div style={{ color: "white", fontSize: "25px" }}>
        <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
      </div>
      <div style={{ color: "white", fontSize: "25px", marginLeft: "220px" }}>
        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
      </div>
      <div style={{ color: "white", fontSize: "25px" }}>
        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
      </div>
      <div>
        <Image
          borderRadius={"50%"}
          width={30}
          height={30}
          src="https://yt3.ggpht.com/yti/AHyvSCB8rpOq2e_1ZvabuwwR-Iro1ihVCUhEcOm7t21tMQ=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
};
