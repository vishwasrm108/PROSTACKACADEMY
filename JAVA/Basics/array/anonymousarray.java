class AnonymousArrayExample {
    // A method that takes an array of integers and calculates the sum
    public static int calculateSum(int[] numbers) {
        int sum = 0;

        // Accessing elements of the anonymous array
        for (int number : numbers) {
            sum += number;
        }

        return sum;
    }
    public static void main(String[] args) {
        // Creating and using an anonymous array of integers
        int sum = calculateSum(new int[]{1, 2, 3, 4, 5});

        System.out.println("Sum: " + sum);
    }

    
}
