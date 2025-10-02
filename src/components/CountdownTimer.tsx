import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CountdownTimerProps {
    duration: number;
    selectedIndex: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration, selectedIndex }) => {
    const [time, setTime] = useState<number>(duration);
    const [startTime, setStartTime] = useState<number>(Date.now());

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const remaining = duration - elapsed;
            setTime(remaining >= 0 ? remaining : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, [startTime, duration]);

    useEffect(() => {
        if (selectedIndex !== null && selectedIndex !== undefined) {
            setStartTime(Date.now());
            setTime(duration);
        }
    }, [selectedIndex, duration]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Offer expires in</Text>
            <Text style={styles.timer}>{`${formatTime(time)} sec`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 25 },
    text: { fontSize: 16, marginRight: 5 },
    timer: { fontSize: 17, fontWeight: '500', color: '#44226E' },
});

export default CountdownTimer;
