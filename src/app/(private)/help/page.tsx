import PageContainer from '@/components/layout/page-container/page-container';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import { FaExpandAlt } from 'react-icons/fa';

const styles = {
  widthResponsive: { width: { xs: '90%', sm: '75%', md: '70%' } },
};

export default function HelpPage() {
  return (
    <PageContainer title="Help">
      <Box p={4} sx={styles.widthResponsive}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Accordion sx={{ margin: '10px 0 !important' }}>
            <AccordionSummary expandIcon={<FaExpandAlt />}>
              <Typography variant="h6">How to Create Short Links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To create a short link, log in to your account, navigate to the dashboard, and click
                on the "Create New Short Link" button. Enter the title, the long URL, and customize
                the short URL if needed. Finally, click "Save" to generate the short link.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: '10px 0 !important' }}>
            <AccordionSummary expandIcon={<FaExpandAlt />}>
              <Typography variant="h6">How to Edit Short Links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To edit a short link, go to your dashboard and locate the link you want to edit.
                Click on the "Edit" button next to the short link. You can modify the title, long
                URL, or the short URL. After making your changes, click "Update" to save them.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: '10px 0 !important' }}>
            <AccordionSummary expandIcon={<FaExpandAlt />}>
              <Typography variant="h6">How to Remove Short Links</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To remove a short link, go to your dashboard and find the link you want to delete.
                Click on the "Delete" button next to the short link. Confirm the deletion when
                prompted. The short link will be permanently removed.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: '10px 0 !important' }}>
            <AccordionSummary expandIcon={<FaExpandAlt />}>
              <Typography variant="h6">How to Remove Your Account</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                If you wish to delete your account, navigate to the "Settings" page. Scroll down to
                the "Delete Account" section and click the "Delete Account" button. You will be
                asked to confirm this action, as it is irreversible. Once confirmed, your account
                and all associated data will be permanently deleted.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: '10px 0 !important' }}>
            <AccordionSummary expandIcon={<FaExpandAlt />}>
              <Typography variant="h6">How to Change Your Password</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To change your password, go to the "Settings" page. In the "Change Password"
                section, enter your current password, followed by the new password and confirmation.
                Click "Update Password" to save the changes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ margin: '10px 0 !important' }}>
            <AccordionSummary expandIcon={<FaExpandAlt />}>
              <Typography variant="h6">How to Change Account Settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                To update your account settings, navigate to the "Settings" page. In the "Update
                Profile" section, you can modify your name and email address. After making your
                changes, click "Update Profile" to save them.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Box>
    </PageContainer>
  );
}
