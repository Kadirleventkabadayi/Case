import { Skeleton } from "antd";

const HomeSkeleton: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          width: "80%",
        }}
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <Skeleton.Node
            key={index}
            active
            style={{
              width: 300,
              height: 400,
              margin: 24,
              backgroundColor: "white",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSkeleton;
