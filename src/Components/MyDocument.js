import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    border: '1px solid black',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  question: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  option: {
    fontSize: 12,
    marginLeft: 20,
    marginBottom: 2,
  }
});

// Create PDF component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.question}>Question 1: What is the capital of France?</Text>
        <Text style={styles.option}>a) Paris</Text>
        <Text style={styles.option}>b) London</Text>
        <Text style={styles.option}>c) Rome</Text>
        <Text style={styles.option}>d) Berlin</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.question}>Question 2: Who wrote "To Kill a Mockingbird"?</Text>
        <Text style={styles.option}>a) Harper Lee</Text>
        <Text style={styles.option}>b) J.K. Rowling</Text>
        <Text style={styles.option}>c) Charles Dickens</Text>
        <Text style={styles.option}>d) Jane Austen</Text>
      </View>
    </Page>
  </Document>
);

// Export PDF component
export default MyDocument;
