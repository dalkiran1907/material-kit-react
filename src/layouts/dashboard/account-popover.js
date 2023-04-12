import { useCallback } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
  Avatar,
  SvgIcon,
  Stack,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import Link from "next/link";
import GlobeIcon from "@heroicons/react/24/solid/GlobeAltIcon";

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const auth = useAuth();

  const handleSignOut = useCallback(() => {
    onClose?.();
    auth.signOut();
    router.push("/auth/login");
  }, [onClose, auth, router]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>

        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={2}>
            <Typography color="text.secondary" variant="body2">
              Truva.Dev
            </Typography>
          </Stack>
          <Link href="https://truva.dev/" target="_blank" rel="noopener">
            <Avatar
              sx={{
                backgroundColor: "success.main",
                height: 20,
                width: 20,
                marginLeft: 5,
              }}
            >
              <SvgIcon>
                <GlobeIcon />
              </SvgIcon>
            </Avatar>
          </Link>
        </Stack>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
