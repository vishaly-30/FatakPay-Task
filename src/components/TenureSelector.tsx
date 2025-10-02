import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface EmiOption {
  months: number;
  emi: number;
  total: number;
}

interface TenureSelectorProps {
  options: EmiOption[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const TenureSelector: React.FC<TenureSelectorProps> = ({
  options,
  selectedIndex,
  onSelect,
}) => {
  return (
    <View style={styles.card}>
      {/* Left Header Column */}
      <View style={styles.headerColumn}>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Months</Text>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>EMI</Text>
        </View>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Total</Text>
        </View>
        <View style={[styles.headerCell, styles.checkmarkCell]} />
      </View>

      {/* Options Columns */}
      {options.map((item, index) => {
        const isSelected = index === selectedIndex;

        return (
          <TouchableOpacity
            key={index}
            style={styles.optionContainer}
            activeOpacity={0.9}
            onPress={() => onSelect(index)}
          >
            {isSelected ? (
              <LinearGradient
                colors={['#ffd966', '#ffe9a8']}
                style={styles.optionColumn}
              >
                <View style={styles.dataCell}>
                  <Text style={[styles.dataText, styles.selectedText]}>{item.months}</Text>
                </View>
                <View style={styles.dataCell}>
                  <Text style={[styles.dataText, styles.selectedText]}>₹ {item.emi.toLocaleString('en-IN')}</Text>
                </View>
                <View style={styles.dataCell}>
                  <Text style={[styles.dataText, styles.selectedText]}>₹ {item.total.toLocaleString('en-IN')}</Text>
                </View>
                <View style={[styles.dataCell, styles.checkmarkCell]}>
                  <View style={styles.checkmarkContainer}>
                    <Image
                      source={require('../assets/gree_ntick.png')}
                      style={[styles.checkmark, { tintColor: '#4CAF50' }]}
                    />
                  </View>
                </View>
              </LinearGradient>
            ) : (
              <View style={styles.optionColumn}>
                <View style={styles.dataCell}>
                  <Text style={[styles.dataText, styles.unselectedText]}>{item.months}</Text>
                </View>
                <View style={styles.dataCell}>
                  <Text style={[styles.dataText, styles.unselectedText]}>₹ {item.emi.toLocaleString('en-IN')}</Text>
                </View>
                <View style={styles.dataCell}>
                  <Text style={[styles.dataText, styles.unselectedText]}>₹ {item.total.toLocaleString('en-IN')}</Text>
                </View>
                <View style={[styles.dataCell, styles.checkmarkCell]}>
                  <View style={[styles.checkmarkContainer, styles.unselectedCheckmark]}>
                    <Image
                      source={require('../assets/gree_ntick.png')}
                      style={[styles.checkmark, { tintColor: '#ccc' }]}
                    />
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 16,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  headerColumn: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 16,
    justifyContent: 'space-between',
  },
  headerCell: {
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  optionContainer: {
    flex: 1,
  },
  optionColumn: {
    flex: 1,
    alignItems: 'center',
  },
  dataCell: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 18,
    fontWeight: '600',
  },
  selectedText: {
    color: '#333',
  },
  unselectedText: {
    color: '#ccc',
  },
  checkmarkCell: {
    height: 60,
  },
  checkmarkContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unselectedCheckmark: {
    backgroundColor: '#e0e0e0',
  },
  checkmark: {
    width: 20,
    height: 20,
  },
});

export default TenureSelector;