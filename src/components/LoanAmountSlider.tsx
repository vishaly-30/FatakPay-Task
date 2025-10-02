import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Slider } from '@miblanchard/react-native-slider';

interface LoanAmountSliderProps {
    value: number;
    onChange: (val: number) => void;
    min?: number;
    max?: number;
}

const LoanAmountSlider: React.FC<LoanAmountSliderProps> = ({
    value,
    onChange,
    min = 10000,
    max = 50000,
}) => {
    return (
        <LinearGradient
            colors={['#ffffff', '#faf6ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 0 }}
            style={styles.card}>
            <Text style={styles.amount}>{`₹${value}`}</Text>
            <View style={{ marginHorizontal: 20 }}>
                <Slider
                    value={[value]}
                    onValueChange={(val) => onChange(val[0] as number)}
                    minimumValue={min}
                    maximumValue={max}
                    step={1000}
                    minimumTrackTintColor="#44226E"
                    maximumTrackTintColor="#ccc"
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                />
            </View>
            <View style={styles.labelRow}>
                <Text style={styles.label}>₹{min.toLocaleString()}</Text>
                <Text style={styles.label}>₹{max.toLocaleString()}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginTop: 25,
        borderWidth: 2,
        borderColor: '#F2EAFC',
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 1,
    },
    amount: {
        color: '#44226E',
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
    },
    track: { height: 10, borderRadius: 6, backgroundColor: '#e0e0e0' },
    thumb: {
        height: 24,
        width: 24,
        borderRadius: 15,
        backgroundColor: '#44226E',
        borderWidth: 3,
        borderColor: 'white',
        elevation: 4,
    },
    labelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    label: { fontSize: 14, fontWeight: '500', color: '#44226E' },
});

export default LoanAmountSlider;
