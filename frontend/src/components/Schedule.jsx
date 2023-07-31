import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Avatar } from '@mui/material';
import { Check, Close } from '@mui/icons-material';

const Schedule = () => {
  const trainers = [
    { id: 1, name: 'かえぽ', photoUrl: '/trainers/kaepo.jpg', comment: '初心者から上級者まで、どなたでもお気軽にトレーニングをサポートします。' },
    { id: 2, name: 'ぽんちゃ', photoUrl: '/trainers/pontya.jpg', comment: '体力向上に特化したトレーニングを提供します。' },
    { id: 3, name: 'nao★', photoUrl: '/trainers/nao.jpg', comment: 'ダンス系のトレーニングを得意としています。' },
  ];

  const [trainerData, setTrainerData] = useState(
    trainers.map((trainer) => ({
      ...trainer,
      schedule: [
        { time: '9:00', available: true },
        { time: '9:30', available: false },
        { time: '10:00', available: true },
        { time: '10:30', available: true },
        { time: '11:00', available: false },
        // ... 他の時間帯も同様に続く
        { time: '21:30', available: true },
        { time: '22:00', available: true },
      ],
    }))
  );

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const handleTimeSlotClick = (trainerIndex, timeSlotIndex) => {
    const clickedTimeSlot = trainerData[trainerIndex].schedule[timeSlotIndex];
    if (clickedTimeSlot.available) {
      setSelectedTimeSlot({ trainerIndex, timeSlotIndex });
      setSelectedTrainer(null); // 新しい時間帯が選択された場合はトレーナー選択をリセット
    }
  };

  const handleTrainerSelection = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleFinalConfirmation = () => {
    // 最終確認の処理を実装
    // 予約情報をバックエンドに送信したり、データを保存したりする処理を行います
    // ここではサンプルとしてアラートを表示します
    alert(`次の情報で予約が確定しました：
    日時：${trainerData[selectedTimeSlot.trainerIndex].schedule[selectedTimeSlot.timeSlotIndex].time}
    トレーナー：${selectedTrainer.name}`);
    setSelectedTimeSlot(null);
    setSelectedTrainer(null);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">スケジュール</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {trainerData.map((trainer, trainerIndex) => (
              <TableRow key={trainer.id}>
                <TableCell>{trainer.name}</TableCell>
                {trainer.schedule.map((item, timeSlotIndex) => (
                  <TableCell
                    key={item.time}
                    onClick={() => handleTimeSlotClick(trainerIndex, timeSlotIndex)}
                    style={{ cursor: item.available ? 'pointer' : 'default' }}
                  >
                    {item.available ? (selectedTimeSlot?.trainerIndex === trainerIndex && selectedTimeSlot?.timeSlotIndex === timeSlotIndex ? <Check /> : <></>) : <Close />}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={selectedTimeSlot !== null} onClose={() => setSelectedTimeSlot(null)}>
        <DialogTitle>トレーナーを選択してください</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {trainers.map((trainer) => (
              <Grid item xs={4} key={trainer.id} onClick={() => handleTrainerSelection(trainer)} style={{ cursor: 'pointer' }}>
                <Avatar alt={trainer.name} src={trainer.photoUrl} sx={{ width: 100, height: 100, margin: '0 auto' }} />
                <Typography variant="subtitle1" style={{ marginTop: '8px', fontWeight: 'bold' }}>
                  {trainer.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {trainer.comment}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedTimeSlot(null)}>キャンセル</Button>
          <Button onClick={handleFinalConfirmation} color="primary" disabled={!selectedTrainer}>
            予約する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Schedule;
