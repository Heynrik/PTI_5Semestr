import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Agendamento = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const loadSavedDate = async () => {
      try {
        const savedDate = await AsyncStorage.getItem('confirmedDate');
        if (savedDate) {
          setDate(new Date(savedDate));
          setIsConfirmed(true);
        }
      } catch (error) {
        console.error("Failed to load the date from storage", error);
      }
    };
    loadSavedDate();
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    hideDatePicker();
  };

  const confirmAppointment = async () => {
    setIsConfirmed(true);
    try {
      await AsyncStorage.setItem('confirmedDate', date.toISOString());
    } catch (error) {
      console.error("Failed to save the date to storage", error);
    }
  };

  const editAppointment = () => {
    setIsConfirmed(false);
    showDatePicker();
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento de Consultas</Text>
      {isConfirmed ? (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>Consulta agendada para:</Text>
          <Text style={styles.dateText}>{formatDate(date)}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Alterar Data" onPress={editAppointment} />
          </View>
        </View>
      ) : (
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Data selecionada: {formatDate(date)}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Selecionar Data" onPress={showDatePicker} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Confirmar Agendamento" onPress={confirmAppointment} />
          </View>
        </View>
      )}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  dateContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    marginBottom: 10,
  },
  confirmationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default Agendamento;
