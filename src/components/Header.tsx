import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface HeaderProps {
  title: string;
  amount: number;
}

const Header: React.FC<HeaderProps> = ({ title, amount }) => {
  return (
    <LinearGradient
      colors={['#44226E', '#8B6CB1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>₹{amount.toLocaleString()}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 25 },
  title: { color: '#fff', fontSize: 20, fontWeight: '600' },
  amount: { color: '#fff', fontSize: 60, fontWeight: 'bold' },
});

export default Header;
