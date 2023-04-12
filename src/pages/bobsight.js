import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import CustemerWebsite from "../sections/settings/settings-website";
import BobLine from "../charts/bobLine";

const Page = () => {
  return (
    <>
      <Head>
        <title>Bob Sight</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={12} lg={12}>
              <CustemerWebsite />
            </Grid>
            <Grid xs={12} lg={12}>
              <BobLine />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
