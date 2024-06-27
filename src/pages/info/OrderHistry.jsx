import { mockDataOrderHistry } from "../../constants/mockData";
// import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../styles/theme";
import { Header, ProgressCircle, StatBox } from "../../components";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../constants/mockData";
// import { tokens } from "../styles/theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import EmailIcon from "@mui/icons-material/Email";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
const OrderHistry = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="10px"
      >
        {/* 🟨🟨🟨🟨🟨🟨 ROW 1 🟨🟨🟨🟨🟨🟨 */}
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[101]}
          display="flex"
          alignItems="center"
          justifyContent="center"

        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            
          />
           <Box
           display="flex"
           alignItems="end"
           justifyContent="flex-end">
          <Button
            sx={{
              backgroundColor: '#48967A',
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "5px 10px",
               borderRadius: '50px'
              
            }}
          >
              <TaskAltOutlinedIcon sx={{ mr: "5px" }} />
              Complete
          </Button>
        </Box>
        
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[101]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
            <Box
           display="flex"
           alignItems="end"
           justifyContent="flex-end">
          <Button
            sx={{
              backgroundColor: '#A95552',
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "5px 10px",
               borderRadius: '50px'
              
            }}
          >
              <DeleteOutlineOutlinedIcon sx={{ mr: "5px" }} />
              Cancelled
          </Button>
        </Box>
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[101]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
            <Box
           display="flex"
           alignItems="end"
           justifyContent="flex-end">
          <Button
            sx={{
              backgroundColor: '#4B72C2',
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "5px 10px",
               borderRadius: '50px'
              
            }}
          >
              <LoopOutlinedIcon sx={{ mr: "5px" }} />
              InProgress
          </Button>
        </Box>
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[101]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
            <Box
           display="flex"
           alignItems="end"
           justifyContent="flex-end">
          <Button
            sx={{
              backgroundColor: '#D6A24F',
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "5px 10px",
               borderRadius: '50px'
              
            }}
          >
              <PendingActionsOutlinedIcon sx={{ mr: "5px" }} />
              Pending
          </Button>
        </Box>
        </Box>

       

     
       
      </Box>
    </Box>
  );
};

export default OrderHistry;