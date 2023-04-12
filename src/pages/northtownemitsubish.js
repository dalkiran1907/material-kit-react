import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import CustemerWebsite from "../sections/companies/companies-website";
import NorthtowneLine from "../charts/northtowneLine";

const Page = () => {
  return (
    <>
      <Head>
        <title>Northtowne Mitsubishi</title>
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
              <NorthtowneLine/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
