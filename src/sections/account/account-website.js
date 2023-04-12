import PropTypes from "prop-types";
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import GlobeIcon from "@heroicons/react/24/solid/GlobeAltIcon";

export const Total = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={2}>
            <Typography color="text.secondary" variant="overline">
              My Website
            </Typography>
            <Typography variant="h5">Gavins Point Recreational Center</Typography>
          </Stack>
          <Link href="https://www.gavinspointrec.com/" target="_blank" rel="noopener">
            <Avatar
              sx={{
                backgroundColor: "success.main",
                height: 56,
                width: 56,
              }}
            >
              <SvgIcon>
                <GlobeIcon />
              </SvgIcon>
            </Avatar>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
};

Total.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
};
export default Total;
