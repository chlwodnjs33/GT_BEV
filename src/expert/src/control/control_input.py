class ControlInput:
    def __init__(self, acc, steering, velocity=None):
        if velocity is None:
            if acc > 0:
                self.accel = acc
                self.brake = 0.
            else:
                self.accel = 0.
                self.brake = -acc
            self.velocity = 0.
            self.acceleration = 0.
            self.longlCmdType = 1
        else:
            self.accel = 0.
            self.brake = 1.0 if velocity <= 0.1 and acc < 0 else 0.
            self.velocity = max(0., velocity)
            self.acceleration = 0.
            self.longlCmdType = 2
        self.steering = steering
