import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import LoanAmountSlider from '../components/LoanAmountSlider';
import TenureSelector, { EmiOption } from '../components/TenureSelector';
import CountdownTimer from '../components/CountdownTimer';

const MainScreen: React.FC = () => {
    const [principalValue, setPrincipalValue] = useState<number>(10000);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [emiOptions, setEmiOptions] = useState<EmiOption[]>([]);
    const rateOfInterest = 29.95;
    const numberOfMonths = [3, 6, 9];

    const calculateEMI = (P: number, annualRate: number, N: number): EmiOption => {
        const monthlyRate = annualRate / 12 / 100;
        const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1);
        const total = emi * N;
        return { months: N, emi: Math.round(emi), total: Math.round(total) };
    };

    useEffect(() => {
        const updatedOptions = numberOfMonths.map((months) =>
            calculateEMI(principalValue, rateOfInterest, months)
        );
        setEmiOptions(updatedOptions);
    }, [principalValue]);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#44226E" barStyle="light-content" />
            <Header title="Approved Loan" amount={50000} />
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Select Loan Amount</Text>
                <Text style={styles.sectionSubtitle}>Move the slider to select your loan amount</Text>
                <LoanAmountSlider value={principalValue} onChange={setPrincipalValue} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: '5%', marginTop: 25 }}>
                <Text style={{ width: 20, height: 20, backgroundColor: '#000', color: '#fff', borderRadius: 10, textAlign: 'center', fontWeight: '600'}}>{'i'}</Text>
                <Text style={{ fontSize: 15, fontWeight: '400',  marginLeft: 10}}>An annualised interest rate of 29.95% p.a. will be applicable.</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Select Tenure</Text>
                <Text style={styles.sectionSubtitle}>Choose your preferred term in months</Text>
            </View>
            <TenureSelector options={emiOptions} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
            <CountdownTimer duration={30} selectedIndex={selectedIndex}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    section: { paddingHorizontal: '5%', marginTop: 20 },
    sectionTitle: { fontSize: 20, color: '#44226E', fontWeight: '600' },
    sectionSubtitle: { fontSize: 16, color: '#868686', marginTop: 5 },
});

export default MainScreen;
