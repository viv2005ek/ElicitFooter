import ListMaker from "./ListMaker";
function LinkLeftFooter() {
  let datas = [
    "Home",
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <div>
      <h1
        style={{
          color: "white",
          textDecoration: "underline",
          textDecorationColor: "#B6ADA7",
          textDecorationThickness: "4px",
          marginBottom: "20px",
          fontFamily: "sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Quick Links
      </h1>
      <div>
        {datas.map((data) => {
          return (
            <>
              <ListMaker data={data}></ListMaker>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default LinkLeftFooter;
