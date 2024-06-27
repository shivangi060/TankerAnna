import { Header, ProgressCircle,  StatBox } from "../components";
import { Box, Button, Card, IconButton, Typography, useTheme } from "@mui/material";
import { notifications } from "../constants/mockData";
import { tokens } from "../styles/theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import EmailIcon from "@mui/icons-material/Email";
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';

const Notification = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">

        <Header title="Welcome" subtitle="Tanker Anna" />



      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
      
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[101]}
          overflow="auto"
        >
         <Card>
          <Box>
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
        Order Tank
       </Typography>
          </Box>
          {notifications.map((notify, i) => (
            <Box
              key={`${notify.name}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              backgroundColor={'transparent'}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {notify.name}
                </Typography>
                <Typography color={colors.grey[100]}>
                <RestoreOutlinedIcon style={{marginTop:5}}/> :  {notify.date}
                </Typography>
              </Box>
            </Box>
          ))}
          </Card> 
        </Box>

      </Box>
    </Box>
  );
};

export default Notification;