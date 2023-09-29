import { Container, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: "5rem",
      }}
    >
      <Typography variant="h4">Profile Page</Typography>
    </Container>
  );
};

export default Profile;
