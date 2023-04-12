import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import OverviewWebsite from "../sections/overview/overview-website";
import OverviewBar from "../charts/worthharleyLine";

const Page = () => (
  <>
    <Head>
      <title>Worth Harley Davidson</title>
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
            <OverviewWebsite />
          </Grid>
          <Grid xs={12} lg={12}>
            <OverviewBar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
