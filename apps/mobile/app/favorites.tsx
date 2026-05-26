import { StyleSheet, Text, View } from "react-native";
import { colors } from "./_layout";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      <View style={styles.emptyState}>
        <Text style={styles.emptyIcon}>♡</Text>
        <Text style={styles.emptyText}>No saved codes yet</Text>
        <Text style={styles.emptyHint}>
          Search for discount codes and tap the heart icon to save them here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyIcon: {
    fontSize: 48,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },
  emptyHint: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: 8,
    marginHorizontal: 40,
  },
});
