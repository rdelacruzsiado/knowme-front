import PropTypes from "prop-types";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

const PublicationCard = ({ publication }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography align="left" gutterBottom variant="h6">
          {publication.userName}
        </Typography>
        <Typography align="center" variant="body1">
          {publication.content}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          <SvgIcon color="action" fontSize="small">
            <ClockIcon />
          </SvgIcon>
          <Typography color="text.secondary" display="inline" variant="body2">
            {publication.createDate}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

PublicationCard.propTypes = {
  publication: PropTypes.object.isRequired,
};

export default PublicationCard;
