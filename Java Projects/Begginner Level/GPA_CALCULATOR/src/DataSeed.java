import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;



public class DataSeed {
    public void saveLecture(Lectures lecture) {
        String sql = "INSERT INTO lectures (name, weight, grade) VALUES (?, ?, ?)";
        try (Connection conn = DbConnect.connect();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setString(1, lecture.getName());
            stmt.setInt(2, lecture.getWeight());
            stmt.setDouble(3,lecture.getGrade());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public double getWeightedAverage() {
        String sql = "SELECT SUM(grade * weight) / SUM(weight) AS avg FROM lectures";
        try (Connection conn = DbConnect.connect();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            if (rs.next()) {
                return rs.getDouble("avg");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0.0;
    }

}
