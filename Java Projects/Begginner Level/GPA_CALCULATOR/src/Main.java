import java.util.Scanner;
import java.util.ArrayList;


public class Main {
    public static void main(String[] args) {
        ArrayList<String> grades_list = new ArrayList<>();
        grades_list.add("FF");
        grades_list.add("FD");
        grades_list.add("DD");
        grades_list.add("DC");
        grades_list.add("CC");
        grades_list.add("CB");
        grades_list.add("BB");
        grades_list.add("BA");
        grades_list.add("AA");
        Scanner input = new Scanner(System.in);
        DataSeed data = new DataSeed();
        DBMigration.migrate();

        while (true) {
            System.out.println("\nMENU:");
            System.out.println("2 - Calculate GPA");
            System.out.println("1 - Add a new lecture");
            System.out.println("0 - Exit");
            System.out.print("Your Choice: ");

            int choice = input.nextInt();
            input.nextLine();

            if (choice == 0) {
                System.out.println("Exiting...");
                break;
            } else if (choice == 1) {
                System.out.print("Name: ");
                String name = input.nextLine();

                System.out.print("Weight: ");
                int weight = input.nextInt();
                input.nextLine();

                System.out.println("Enter your grade as in form of \nAA BA BB CB CC DC DD FD FF ");
                String sign = input.nextLine();
                double grade = 0.0;
                for (String item : grades_list){

                    if (item.equals(sign)){
                        grade = 0.5 * grades_list.indexOf(sign);
                    }

                }
                Lectures lecture = new Lectures(name, weight,grade);
                data.saveLecture(lecture);
            }
            else if (choice==2) {
                double result = data.getWeightedAverage();
                System.out.println(String.format("Your Current GPA is : %.2f",result ));

            }
            else {
                System.out.println("Invalid Selection!");
            }
        }

        input.close();
    }
}
