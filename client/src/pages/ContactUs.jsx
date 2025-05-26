import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  TextField,
  Button,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import templeImage from "../assets/contact_us.png";
import styles from "./ContactusStyle";

const ContactUs = () => {
  return (
    <Box>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Box
          sx={{
            ...styles.topImageBox,
            backgroundImage: `url(${templeImage})`,
          }}
        >
          <Typography variant="h2" sx={styles.headingTypography}>
            Contact Us
          </Typography>
        </Box>
      </motion.div>

      {/* Contact + Feedback Horizontal Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          padding: "40px 5%",
          gap: 4,
          bgcolor: "#f2d7aa",
        }}
      >
        {/* Contact Info */}
        <Box sx={{ flex: 1, minWidth: "250px" }}>
          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <EmailIcon />
              <Link
                href="mailto:lenfe@tomple.com"
                underline="hover"
                sx={styles.contactText}
              >
                lenfe@tomple.com
              </Link>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <PhoneIcon />
              <Link
                href="tel:1011415400"
                underline="hover"
                sx={styles.contactText}
              >
                (101) 141 5400
              </Link>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <LocationOnIcon />
              <Typography sx={styles.contactText}>Banaras, India</Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Feedback Form */}
        <Box
          sx={{
            flex: 1,
            minWidth: "300px",
            bgcolor: "#fff8e1",
            px: 2,
            py: 2,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5" sx={styles.formHeading}>
            Send Us Your Feedback
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={styles.formBox}
          >
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={styles.textField}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              sx={styles.textField}
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              sx={styles.textField}
            />
            <Button
              variant="contained"
              type="submit"
              sx={styles.submitButton}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
