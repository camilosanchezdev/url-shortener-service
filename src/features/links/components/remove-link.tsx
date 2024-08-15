'use client';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useQueryParams from '@/hooks/params';
import useRemoveUrl from '@/features/links/hooks/useRemoveUrl';

type Props = {
  itemSelected: number;
};
export default function RemoveLink({ itemSelected }: Props) {
  const { mutate } = useRemoveUrl();
  const { removeParams } = useQueryParams();
  const handleConfirm = () => {
    mutate({ itemId: itemSelected });
  };

  const handleClose = () => {
    removeParams(['remove', 'item']);
  };
  return (
    <>
      <DialogTitle id="alert-dialog-title"> Do you want to remove this link?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You will not be able to undo this action
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleConfirm} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </>
  );
}
