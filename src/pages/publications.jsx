import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import PublicationCard from "../sections/publications/publication-card";

const publications = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    createDate: "27/03/2019",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userName: "Andrés Siado",
  },
  {
    id: "ed2b900870ceba72d203ec15",
    createDate: "31/03/2019",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userName: "Robinson De La Cruz",
  },
  {
    id: "a033e38768c82fca90df3db7",
    createDate: "03/04/2019",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userName: "Silgifredo Rodríguez",
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    createDate: "04/04/2019",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userName: "Maria García",
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    createDate: "04/04/2019",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userName: "Laura Jiménez",
  },
  {
    id: "5dab321376eff6177407e887",
    createDate: "04/04/2019",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userName: "Cristina Flórez",
  },
];

const Page = () => (
  <>
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Publicaciones</Typography>
            </Stack>
            <div>
              <Button
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                variant="contained"
              >
                Nueva
              </Button>
            </div>
          </Stack>
          <Grid container spacing={3}>
            {publications.map((publication) => (
              <Grid xs={12} md={6} lg={4} key={publication.id}>
                <PublicationCard publication={publication} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination count={3} size="small" />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Page;
